export type InvoiceType = {
  id: string
  usage: "個人" | "法人" | "",
  invoice: File | null,
  amount: number | null,
  company: string,
  person: string,
  phone: string,
  purpose: string,
  evidence: File | null,
}

// const mockPdf = new File(["%PDF-1.4 mock content"], "invoice.pdf", {
//   type: "application/pdf",
// });
// const mockImage = new File(["fake image data"], "evidence.jpg", {
//   type: "image/jpeg",
// });

const invoiceHistories: InvoiceType[] = [
  {
    id: "1",
    usage: "個人",
    invoice: null,
    amount: 150000,
    company: "株式会社A",
    person: "田中 太郎",
    phone: "0312345678",
    purpose: "資金調達",
    evidence: null,
  },
  {
    id: "2",
    usage: "個人",
    invoice: null,
    amount: 80000,
    company: "株式会社B",
    person: "佐藤 花子",
    phone: "0698765432",
    purpose: "設備投資",
    evidence: null,
  },
  {
    id: "3",
    usage: "法人",
    invoice: null,
    amount: 120000,
    company: "株式会社C",
    person: "鈴木 一郎",
    phone: "0521112222",
    purpose: "その他",
    evidence: null,
  },
]

export const fetchInvoiceHistory = async (invoiceId: string): Promise<InvoiceType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const invoice = invoiceHistories.find((item) => item.id === invoiceId);
      if (invoice) {
        resolve(invoice);
      } else {
        reject(new Error("該当するデータが見つかりませんでした"));
      }
    }, 2000);
  });
}

export const fetchIsJuridicPerson = async (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
      // reject("法人かどうかわからなかったです。")
    }, 2500);
  });
}

const purposeOptions: string[] = [
  "資金調達",
  "設備投資",
  "その他",
]

export const fetchPurposeOptions = async (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(purposeOptions.length) {
        resolve(purposeOptions)
      } else {
        reject("ご利用目的が見つかりませんでした")
      }
    }, 1000);
  });
}