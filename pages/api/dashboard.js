export default function handler(req, res) {
  res.status(200).json({
    treasury: {
      daoWallet: "0xC16eC985D98Db96DE104Bf1e39E1F2Fdb9a712E9",
      founderWallet: "0xFf01Fa9D5d1e5FCc539eFB9654523A657F32ed23",
      balance: "15,999,000 AIDAG"
    },
    presale: {
      stage1: "0.078",
      stage2: "0.093",
      listing: "0.12",
      target: "$1,000,000"
    },
    vote: {
      activeVote: {
        proposal: "Aidag Mining modülünün DAO oylamasıyla aktive edilmesi",
        options: ["Evet", "Hayır", "Çekimser"],
        deadline: "2026-01-15T23:59:00Z",
        status: "ongoing"
      },
      pastVotes: [
        {
          proposal: "Aidag.price modülünün zincir üstü tanımı",
          result: "Evet",
          participation: "87%"
        },
        {
          proposal: "Aidag.market modülünün DAO onayıyla başlatılması",
          result: "Evet",
          participation: "91%"
        }
      ]
    },
    chain: "BSC Mainnet",
    contract: "0xe6B06f7C63F6AC84729007ae8910010F6E721041"
  });
}

