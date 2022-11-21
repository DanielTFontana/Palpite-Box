import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment/moment'


const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const getCupom = ()=>{
    const codeCupom = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return codeCupom.substring(0,4) + '-' + codeCupom.substring(4,8) + '-' + codeCupom.substring(8,12)
}
export default async (req, res ) => {

    try{
        await doc.useServiceAccountAuth({
            client_email:process.env.SHEET_CLIENT_EMAIL,
            private_key:process.env.SHEET_PRIVATE_KEY
            
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')

        const showCellPromotion = sheetConfig.getCell(1,0)    
        const TextCell = sheetConfig.getCell(1,1)

        let Cupom = ''
        let Promo = ''
        if(showCellPromotion.value === 'Verdadeiro'){

            Cupom = getCupom()
            Promo = TextCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt( data.Nota),
            'Data de Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
            Cupom:getCupom(),
            Promo
        })
        res.end(JSON.stringify({
            showCoupon: Cupom !=='',
            Cupom,
            Promo
        }))
        }
     catch (err){
        console.log(err)
        res.end('error')
    }

}