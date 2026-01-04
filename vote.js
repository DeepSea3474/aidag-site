export default function handler(req, res) {
  res.status(200).json({
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
    ],
    chain: "BSC Mainnet",
    contract: "0xe6B06f7C63F6AC84729007ae8910010F6E721041"
  });

