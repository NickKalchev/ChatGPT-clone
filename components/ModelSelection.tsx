'use client'

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch('/api/getEngines').then(res => res.json());

function ModelSelection() {
    const { data: models, isLoading } = useSWR('models', fetchModels);
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: 'text-davinci-003'
    });


    return (
        <div className="my-3">
            <Select
            className="mt-2"
            isSearchable
            isLoading={isLoading}
            menuPosition='fixed'
            classNames={{
                control: () => "bg-[#434654] border-[#434654] text-white"
            }}
            placeholder={model}
            defaultValue={model}
            options={models?.modelOptions}
            onChange={(e) => setModel(e.value)}
            />
        </div>
    )
}

export default ModelSelection;
