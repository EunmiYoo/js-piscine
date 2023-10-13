import { Client } from "@notionhq/client/build/src";
import axios from 'axios'
import {useEffect} from 'react'


const GetApi = () =>{
    const notion = new Client({
        auth: 'secret_hLy8PO76CKvDWVTYUrtsokwsknRrCpyEn2GrmmDXxlh',
    })
    useEffect(()=>{axiosTest();})
    const axiosTest = () =>{
        const pageID ='189c28560109483685d954ed65c7e2ae'
        axios.post( "https://api.notion.com/v1/databases/" + pageID + '/query',
        {
          page_size: 100,
        },
        {
          headers: {
            "Authorization": `Bearer ${notion}`,
            "Content-Type": "application/JSON",
            "Notion-Version": "2021-08-16",
          }
        }
      )
    
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
}

export default GetApi;

/* export default function GetApi() {
    async(pageId) => {
    const response = await notion.pages.retrieve({
        page_id: pageId,
    })
    return response
}} */