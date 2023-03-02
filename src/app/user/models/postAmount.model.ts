
export type selecTypeCode = true | false;

export interface PostAcommentModel{
    description: string;
    namePost?: string;
    id: number;
    // choose?: boolean;
    choose?: selecTypeCode;
}

export interface PostAcommentFoto{
    foto: any;
}

