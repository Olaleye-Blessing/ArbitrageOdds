import Image from "next/image";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { StyledInputFile } from "./StyledInput";

interface Props {
    label: string;
    setImage: (image: string) => void;
    extraClass?: string;
    img: string;
}

const InputFile: FC<Props> = ({ label, setImage, extraClass, img }) => {
    const [preview, setPreview] = useState(img);

    const handleFileSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
        let image = e.target.files && e.target.files[0];
        if (!image) return null;

        let reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = function () {
            let preview = reader.result as string;
            let imageName = image!.name;

            let typeRegex = /^data:image\/\w+;base64,/;
            let base64 = preview.replace(typeRegex, "").trimStart();

            let imageVal = `${imageName}+${base64}`;
            setImage(imageVal);

            setPreview(preview);
        };
    };

    useEffect(() => {
        if (!img) setPreview(img);
    }, [img]);

    return (
        <StyledInputFile className={`form__control ${extraClass ?? ""}`}>
            <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={handleFileSelected}
            />
            <label htmlFor="file">
                <strong>{label}</strong>
            </label>
            <output className={`${preview ? "show" : ""}`}>
                <figure>
                    {preview && (
                        <Image
                            src={preview}
                            alt=""
                            lang=""
                            width={300}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                        />
                    )}
                </figure>
            </output>
        </StyledInputFile>
    );
};

export default InputFile;
