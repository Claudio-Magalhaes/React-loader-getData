import React from "react";

function montarVerify(dt){
  let newVerify = {};
  Object.keys(dt).map(d => {
    if (typeof dt[d] === "object") {
      newVerify[d] = montarVerify();
    } else {
      newVerify[d] = dt[d];
    }
  });

  return newVerify;
}

const Index = props => {
  const {data, ...prop} = props;

  const [verifyData, setVerifyData] = React.useState(false);

  if (typeof data.conferiData === "object" && verifyData === false) {
    setVerifyData(true);
    if(Object.keys(data.conferiData).length > 0) {
      setVerifyData(montarVerify(data.conferiData));
    }

    if (typeof data.conferiData === "object" && typeof montarVerify(data.conferiData) === "object") {
      alert();
    }
  }


  if (data.router === "/") {
    return true;
  }
};


export default Index