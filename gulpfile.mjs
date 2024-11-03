import { src, dest, series } from "gulp";
import { deleteSync } from "del";
import fs from "fs";
import path, { dirname } from "path";

function cleanOutputDirectory(cb) {
  deleteSync("output/**/*");
  cb();
}
function moveBuildFiles() {
  return src("dist/**/*").pipe(dest("output/"));
}

function writePackageFile(fullDir, dirName) {
  // src(`output/${dirName}/**/*`).pipe(dest(`output/${dirName}/dist/`));
  const data = {
    name: `athena-api/${dirName}`,
    main: `index.js`,
    // "browser": "dist/esm/index.esm.js",
    // "module": "dist/esm/index.esm.js",
    typings: `index.d.ts`,
  };

  fs.writeFileSync(
    path.join(fullDir, "package.json"),
    JSON.stringify(data, null, 4)
  );
}

function createPackageFiles(cb) {
  const baseDir = "./output";

  fs.readdir(baseDir, { withFileTypes: true }, (err, items) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return done(err);
    }

    items.forEach((item) => {
      if (item.isDirectory()) {
        const fullDir = baseDir + "/" + item.name;
        writePackageFile(fullDir, item.name);
      }
    });
    cb();
  });
}

function copyOtherFiles() {
  return src(["package.json", "README.md"]).pipe(dest("output/"));
}

const generateBuild = series(
  cleanOutputDirectory,
  moveBuildFiles,
  copyOtherFiles,
  createPackageFiles,
  (cb) => cb()
);

export default generateBuild;
