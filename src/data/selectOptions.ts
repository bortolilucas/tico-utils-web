import type { SelectOption } from "@/models/selectOptions";
import { Ufs } from "@/models/ufs";
import { YesOrNoAnswer } from "@/models/yesOrNo";

export const yesOrNoOptions = [
  { label: "Sim", value: YesOrNoAnswer.YES },
  { label: "Não", value: YesOrNoAnswer.NO },
] satisfies SelectOption<YesOrNoAnswer>[];

export const ufOptions = [
  { label: "Indiferente", value: "" },
  { label: "AC", value: Ufs.AC },
  { label: "AL", value: Ufs.AL },
  { label: "AP", value: Ufs.AP },
  { label: "AM", value: Ufs.AM },
  { label: "BA", value: Ufs.BA },
  { label: "CE", value: Ufs.CE },
  { label: "DF", value: Ufs.DF },
  { label: "ES", value: Ufs.ES },
  { label: "GO", value: Ufs.GO },
  { label: "MA", value: Ufs.MA },
  { label: "MT", value: Ufs.MT },
  { label: "MS", value: Ufs.MS },
  { label: "MG", value: Ufs.MG },
  { label: "PA", value: Ufs.PA },
  { label: "PB", value: Ufs.PB },
  { label: "PR", value: Ufs.PR },
  { label: "PE", value: Ufs.PE },
  { label: "PI", value: Ufs.PI },
  { label: "RJ", value: Ufs.RJ },
  { label: "RN", value: Ufs.RN },
  { label: "RS", value: Ufs.RS },
  { label: "RO", value: Ufs.RO },
  { label: "RR", value: Ufs.RR },
  { label: "SC", value: Ufs.SC },
  { label: "SP", value: Ufs.SP },
  { label: "SE", value: Ufs.SE },
  { label: "TO", value: Ufs.TO },
] satisfies SelectOption<Ufs | "">[];
