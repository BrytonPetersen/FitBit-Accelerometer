import { inbox } from "file-transfer";

async function processAllFiles() {
  let file;
  while ((file = await inbox.pop())) {
    const payload = await file.text();
    console.log(`file contents: ${payload}`);
  }
}

inbox.addEventListener("newfile", processAllFiles);

processAllFiles()
