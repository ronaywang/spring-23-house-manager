import { useState } from "react";
import axios from "axios";
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyWXBX6EWJI83bal" }).base(
  "appxk50hiFHmnhcsi"
);
export default function useData2() {
  const [data, setData] = useState(null);

  const getData = async () => {
    return base("Descriptions")
      .select({
        sort: [{ field: "Job", direction: "asc" }],
        pageSize: 100,
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        setData(records);
      });
  };
  return {
    getData,
    data,
  };
}
