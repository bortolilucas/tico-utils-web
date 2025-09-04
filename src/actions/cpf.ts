import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import { Ufs } from "@/models/ufs";
import { YesOrNoAnswer } from "@/models/yesOrNo";
import { generateCpf } from "@/utils/cpf";

const schema = z.object({
  punctuation: z.nativeEnum(YesOrNoAnswer, { message: "Opção inválida" }),
  state: z.nativeEnum(Ufs, { message: "Estado inválido" }).nullable(),
});

export const generateCpfAction = defineAction({
  accept: "form",
  input: schema,
  handler: async ({ punctuation, state }) => {
    const cpf = generateCpf({
      state,
      hasPunctuation: punctuation === YesOrNoAnswer.YES,
    });

    return { cpf, formData: { punctuation, state } };
  },
});
