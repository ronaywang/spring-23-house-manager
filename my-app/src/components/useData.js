import { useState } from "react";
import axios from "axios";
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyWXBX6EWJI83bal" }).base(
  "appxk50hiFHmnhcsi"
);
export default function useData() {
  const [data, setData] = useState(null);

  const getData = async () => {
    return base("Tracker")
      .select({
        sort: [{ field: "Ranking", direction: "desc" }],
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

export function useDataOld() {
  const [data, setData] = useState(null);
  const getData = async () => {
    return axios.get("/").then((res) => setData(res.data.records));
  };

  return {
    getData,
    data,
  };
}
