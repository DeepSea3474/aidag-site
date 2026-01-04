export default function handler(req, res) {
  res.status(200).json({
    stage1: {
      price: "0.078",
      status: "active"
    },
    stage2: {
      price: "0.093",
      status: "upcoming"
    },
    listing: {
      price: "0.12",
      status: "future"
    },
    goal: "1,000,000 USDT presale target",
    chain: "BSC Mainnet",
    contract: "0xe6B06f7C63F6AC84729007ae8910010F6E721041"
  });
}

