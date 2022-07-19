// App dependencies
import * as C from "../../../app/components";
import { ComponentConfig } from "app/config/model";

export const mainColumn: ComponentConfig[] = [
  {
    component: C.TitledText,
    transformer: () => ({
      text: [
        "DCP Generated Matrices are those produced with uniform pipelines. All DCP Generated Matrices include quality control metrics.",
        "The 10x matrices include raw counts. Smart-seq2 matrices include TPMs and estimated counts. Matrices are in Loom file format.",
      ],
      title: "DCP Generated Matrices",
    }),
  } as ComponentConfig<typeof C.TitledText>,
];
