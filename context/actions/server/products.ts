import path from "path";
import fs from "fs";
import axios from "axios";

import { InitialStateType, useProductContext } from "@/context/productContext";
const filePath = path.join(process.cwd(), "data/products.json");
export function readFileAsync() {
  return new Promise<InitialStateType>((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
}


