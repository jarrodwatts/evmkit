import { MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";
import { useState } from "react";

export default function DecentralizedStorage() {
  const [cid, setCid] = useState<string>("");
  const { mutateAsync: upload, isLoading } = useStorageUpload();

  return (
    <div className="mb-4 flex flex-col items-start flex-wrap">
      <div className="flex flex-col mx-2 w-full lg:flex-row">
        <div className="flex flex-col items-center justify-start p-4 mx-2 lg:w-1/2">
          <p className="text-sm text-muted-foreground mb-2">
            1. Upload something
          </p>

          <input
            className="w-full mt-4 border-2 border-gray-300 rounded-md p-4 border-opacity-20"
            type="file"
            onChange={async (e) => {
              const file = e?.target?.files?.[0];
              if (!file) return;

              const cid = await upload({
                data: [file],
              });

              setCid(cid[0]);
            }}
          />

          {isLoading && (
            <p className="text-sm text-muted-foreground mb-2 mt-4">
              Uploading...
            </p>
          )}
        </div>

        <div className="flex flex-col items-center justify-start p-4 mx-2 lg:w-1/2">
          <p className="text-sm text-muted-foreground mb-2">
            2. Preview IPFS file via gateway
          </p>

          {cid && <MediaRenderer src={`${cid}`} />}
        </div>
      </div>
    </div>
  );
}
