import { Informations } from "@/components/informations/InformationModels";
import InformationsComponent from "@/components/informations/Informations";
import Loader from "@/components/ui/Loader";
import { getInformations } from "@/helpers/api-utils";
import React, { useEffect, useState } from 'react';

interface InformationsProps {
    informations: Informations;
}  

function InformationPage({informations}: InformationsProps){
    const [data, setData] =useState<Informations>();

    useEffect(()=> {
        setData(informations)
    },[informations])

    return(
        <div>{data?<InformationsComponent informations={informations}/>: <Loader/> }</div>
    );
}

export async function getServerSideProps() {
    const data = await getInformations();

    return {
        props: {informations: data}
      };
}

export default InformationPage;

