const invoiceData = [
  {
    id: "1",
    date: "2025-01-01",
    detail: {
      amount: 10000,
      companyName: "株式会社ラボル",
    }
  }
]

export const fetchInvoiceTradingHistory = async (invoiceId: string, lazyTime: number = 2000): Promise<any> => {
  console.log("call fetchInvoiceTradingHistory") // HeadとBodyで2回呼ばれる
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const invoice = invoiceData.find((item) => item.id === invoiceId);
      if (invoice) {
        resolve(invoice);
      } else {
        reject("該当するデータが見つかりませんでした");
      }
    }, lazyTime);
  });
}