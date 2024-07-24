import React, { useState } from "react";
import "./TinTuc.scss";
import { AppBar, Box, Grid, Tab, Tabs } from "@mui/material";
import { dataTinTuc } from "./dataTinTuc";
import ItemLargeTinTuc from "./ItemLargeTinTuc";
import ItemNormalTinTuc from "./ItemNormalTinTuc";
import ItemSmallTinTuc from "./ItemSmallTinTuc";
const TinTuc = () => {
  const [state, _setState] = useState({ activeTab: 0 });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
  const handleChange = (event, activeTab) => {
    setState({ activeTab });
  };
  return (
    <div id="tintuc" className="jss105">
      <div className="space" />
      <div className="jss106">
        <AppBar className="jss108" position="static">
          <Tabs value={state.activeTab} onChange={handleChange} centered>
            <Tab
              className="jss109"
              label=<span className="MuiTab-wrapper">ĐIỆN ẢNH 24H</span>
            />
            <Tab
              className="jss109"
              label=<span className="MuiTab-wrapper">REVIEW</span>
            />
            <Tab
              className="jss109"
              label=<span className="MuiTab-wrapper">KHUYẾN MÃI</span>
            />
          </Tabs>
        </AppBar>
        <div className="container-tin-tuc">
          <Box className="jss114">
            <div className="row">
              {dataTinTuc
                .filter((o) => o.tab === state.activeTab && o.isLarge)
                ?.map((o) => (
                  <ItemLargeTinTuc data={o} />
                ))}
            </div>
            <div className="row">
              {dataTinTuc
                .filter((o) => o.isNormal)
                ?.map((o) => (
                  <ItemNormalTinTuc data={o} />
                ))}
              <ItemSmallTinTuc list={dataTinTuc.filter((o) => o.isSmall)} />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
