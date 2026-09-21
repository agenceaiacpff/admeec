const fs=require("fs");
const puppeteer=require("puppeteer-core");

(async()=>{
  const browser=await puppeteer.launch({
    headless:true,
    executablePath:process.env.CHROME_BIN,
    args:["--no-sandbox","--disable-dev-shm-usage"]
  });
  const page=await browser.newPage();
  const logs=[];
  page.on("console",m=>logs.push(m.type()+": "+m.text()));

  await page.evaluateOnNewDocument(()=>{
    window.__pwaPromptSeen=false;
    window.addEventListener("beforeinstallprompt",()=>{window.__pwaPromptSeen=true;});
  });

  const response=await page.goto("https://entraide.aiac-cm.org/",{waitUntil:"networkidle2",timeout:120000});
  await new Promise(r=>setTimeout(r,7000));

  const client=await page.target().createCDPSession();
  const manifest=await client.send("Page.getAppManifest");
  let installability;
  try { installability=await client.send("Page.getInstallabilityErrors"); }
  catch(e){ installability={unsupported:true,error:String(e)}; }

  const dom=await page.evaluate(async()=>{
    const reg=await navigator.serviceWorker?.getRegistration?.("/");
    return {
      href:location.href,
      manifestLink:document.querySelector('link[rel="manifest"]')?.href||null,
      serviceWorkerSupported:"serviceWorker" in navigator,
      serviceWorkerRegistration:Boolean(reg),
      serviceWorkerController:Boolean(navigator.serviceWorker?.controller),
      beforeInstallPromptSeen:Boolean(window.__pwaPromptSeen),
      installBarVisible:Array.from(document.querySelectorAll("aside")).some(el=>/Installer Entraide Monde sur cet ordinateur/.test(el.textContent||""))
    };
  });

  const result={
    testedAt:new Date().toISOString(),
    httpStatus:response?.status()||null,
    chrome:await browser.version(),
    manifest:{url:manifest.url,errors:manifest.errors,data:manifest.data},
    installability,
    dom,
    console:logs
  };
  fs.writeFileSync("pwa-live-test2/result.json",JSON.stringify(result,null,2));
  console.log(JSON.stringify(result,null,2));
  await page.screenshot({path:"pwa-live-test2/page.png",fullPage:true});
  await browser.close();

  if(result.httpStatus!==200) process.exit(10);
  if(result.manifest.errors && result.manifest.errors.length) process.exit(11);
  if(Array.isArray(result.installability.installabilityErrors) && result.installability.installabilityErrors.length) process.exit(12);
  if(!result.dom.serviceWorkerRegistration) process.exit(13);
})().catch(e=>{console.error(e);process.exit(99)});
