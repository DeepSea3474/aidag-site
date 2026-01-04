export default function handler(req, res) {
  res.status(200).json({
    daoWallet: "0xC16eC985D98Db96DE104Bf1e39E1F2Fdb9a712E9",
    founderWallet: "0xFf01Fa9D5d1e5FCc539eFB9654523A657F32ed23",
    balance: "15,999,000 AIDAG",
    chain: "BSC Mainnet",
    contract: "0xe6B06f7C63F6AC84729007ae8910010F6E721041"
  });
}

