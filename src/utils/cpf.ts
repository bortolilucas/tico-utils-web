import { Ufs } from "@/models/ufs";

type CpfOptions = {
  hasPunctuation: boolean;
  state: Ufs | null;
};

export function generateCpf({ hasPunctuation, state }: CpfOptions) {
  const stateDigitMap: Record<Ufs, number[]> = {
    [Ufs.DF]: [1],
    [Ufs.GO]: [1],
    [Ufs.MS]: [1],
    [Ufs.MT]: [1],
    [Ufs.TO]: [1],
    [Ufs.AC]: [2],
    [Ufs.AM]: [2],
    [Ufs.AP]: [2],
    [Ufs.PA]: [2],
    [Ufs.RO]: [2],
    [Ufs.RR]: [2],
    [Ufs.CE]: [3],
    [Ufs.MA]: [3],
    [Ufs.PI]: [3],
    [Ufs.AL]: [4],
    [Ufs.PB]: [4],
    [Ufs.PE]: [4],
    [Ufs.RN]: [4],
    [Ufs.BA]: [5],
    [Ufs.SE]: [5],
    [Ufs.MG]: [6],
    [Ufs.ES]: [7],
    [Ufs.RJ]: [7],
    [Ufs.SP]: [8],
    [Ufs.PR]: [9],
    [Ufs.SC]: [9],
    [Ufs.RS]: [0],
  };

  const firstEightDigits = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 10)
  );

  let ninthDigit: number;
  if (state) {
    const possibleDigits = stateDigitMap[state];
    ninthDigit =
      possibleDigits[Math.floor(Math.random() * possibleDigits.length)];
  } else {
    ninthDigit = Math.floor(Math.random() * 10);
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    const digit = i < 8 ? firstEightDigits[i] : ninthDigit;
    sum += digit * (10 - i);
  }
  let firstCheckDigit = 11 - (sum % 11);
  if (firstCheckDigit >= 10) firstCheckDigit = 0;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    let digit: number;
    if (i < 8) digit = firstEightDigits[i];
    else if (i === 8) digit = ninthDigit;
    else digit = firstCheckDigit;
    sum += digit * (11 - i);
  }
  let secondCheckDigit = 11 - (sum % 11);
  if (secondCheckDigit >= 10) secondCheckDigit = 0;

  const cpfDigits = [
    ...firstEightDigits,
    ninthDigit,
    firstCheckDigit,
    secondCheckDigit,
  ];

  let cpf: string;
  if (hasPunctuation) {
    cpf = `${cpfDigits.slice(0, 3).join("")}.${cpfDigits
      .slice(3, 6)
      .join("")}.${cpfDigits.slice(6, 9).join("")}-${cpfDigits
      .slice(9)
      .join("")}`;
  } else {
    cpf = cpfDigits.join("");
  }

  return cpf;
}
