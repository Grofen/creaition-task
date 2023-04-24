import React, { useEffect } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';

import RandomResults from '../random-results';

import ImageHolder from './image-holder';
import SelectedItems from './selected-items';

interface Props {
  name: string;
  label?: string;
  accept?: Accept;
  isGenerated: boolean;
  setIsGenerated: (isGenerating: boolean) => void;
}

type ItemFile = Record<string, File[]>;

const ItemsForm = ({
  name,
  label = name,
  isGenerated,
  setIsGenerated,
}: Props): JSX.Element => {
  const inputProps = { name, label };

  const { register, unregister } = useForm<ItemFile>();

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.length > 2 || acceptedFiles.length === 0) {
          setIsGenerated(false);
          return;
        }

        setTimeout(() => {
          setIsGenerated(true);
        }, 1000);
      },
      accept: { image: ['image/png', 'image/jpeg', 'image/jpg'] },
      maxFiles: 2,
    });

  const displayPlaceholder =
    acceptedFiles?.length === 0 || fileRejections.length > 0;

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
      setIsGenerated(false);
    };
  }, [register, unregister, name, setIsGenerated]);

  useEffect(() => {
    if (acceptedFiles.length === 0) {
      setIsGenerated(false);
    }
  }, [acceptedFiles, setIsGenerated]);

  return (
    <div className="relative">
      <div className="flex justify-center text-gray-500 text-sm mb-4">
        please select one or two images
      </div>
      <div className="w-full cursor-pointer" {...getRootProps()}>
        <input
          {...inputProps}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          {...getInputProps()}
        />
        {displayPlaceholder ? (
          <ImageHolder />
        ) : (
          <SelectedItems acceptedFiles={acceptedFiles} />
        )}

        {fileRejections.length > 0 && (
          <div className="flex justify-center text-red-500 text-sm mt-4">
            {`* please select one or two images, you have selected ${fileRejections.length} images`}
          </div>
        )}
      </div>

      {isGenerated && <RandomResults />}

      {/* <RandomLines /> */}
    </div>
  );
};

export default ItemsForm;
