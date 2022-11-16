import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from "pdfmake/build/vfs_fonts"
import { format } from 'date-fns';

pdfMake.vfs = pdfFonts.pdfMake.vfs

const buildTableBody = (data: any[], columns: any[]) => {
    var body = []
  
    let dataCol : any [] = []

    columns.forEach((column: any, idx: number) => {
      dataCol.push({ 
        text: column.label.toUpperCase(),
        fontSize: 8,
        fontWeight: 'bold',
        style: renderStyle(true, column.position),
        key: idx,
        fillOpacity: 0.15, 
        fillColor: 'black'
      })
    })

    body.push(dataCol)
  
    data.forEach((row: any, idx: number) => {
      let dataRow : any [] = []

      columns.forEach(column => {
        dataRow.push({ 
          text: parseValue(column.type, row[column.field]), 
          style: renderStyle(false, column.position),
          key: idx
        })
      })
  
      body.push(dataRow)
    })
  
    return body
  
    function parseValue(type: any, value: any) {
      var formatedValue = ''
  
      switch (type) {
        case 'datetime':
          formatedValue = format(new Date(value), 'dd/MM/uuuu HH:mm')
          break
        case 'boolean':
          formatedValue = value ? 'Sim' : 'Não'
          break
        default:
          formatedValue = value
          break
      }
  
      return formatedValue
    }
}

const table = (data: any[], columns: any[]) => {
  var width = []

  for (let index = 0; index < columns.length; index++) {
    width.push(columns[index].width)
  }
  
  return {
    layout: 'noBorders',
    style: 'table',
    table: {
      headerRows: 1,
      widths: width,
      heights: 12,
      body: buildTableBody(data, columns)
    }
  }
}

const renderStyle = (header: any, alignment: any) => {
  var fieldStyled = []

  fieldStyled.push(header ? 'tableHeader' : 'tableRow')

  switch (alignment) {
    case 'right':
      fieldStyled.push('rowRight')
      break
    case 'left':
      fieldStyled.push('rowLeft')
      break
    case 'center':
      fieldStyled.push('rowCenter')
      break
    default:
      fieldStyled.push('rowLeft')
      break
  }

  return JSON.stringify(fieldStyled)
}
  
export const GeneratePDF = (titleReport: string, columns: any[], data: any[], filters: any[], report = true) => {
  var docDefinition : any = {
    pageSize: 'A4',
    pageOrientation: report ? 'portrait' : 'landscape',
    header: [{ 
      text: " ", 
      style: 'header', 
      alignment: 'center' 
    }],
    footer: function (currentPage: number, pageCount: number) {
      var pageText = currentPage.toString() + ' de ' + pageCount

      return [{ 
        text: pageText, 
        alignment: 'center', 
        style: 'footer',
        fontSize: 8
      }]
    },
    content: [
      { text: titleReport, style: 'header', alignment: 'center' },
      { text: `Emitido em: ${format(new Date(), 'dd/MM/uuuu HH:mm')}`, style: 'generateDate', alignment: 'center' },
      filters.length > 0 ? { text: `Filtros: ${filters}`, style: 'subheader', alignment: 'center' } : null,
      {
        // layout: 'noBorders',
        // style: 'table',
      },
      table(data, columns)
    ],
    styles: {
      footer: {
        bold: true,
        fontSize: 12
      },
      header: {
        fontSize: 14,
        bold: true,
        margin: [ 0, 22, 0, 0 ]
      },
      subheader: {
        fontSize: 8,
        bold: false
      },
      table: {
        fontSize: 8,
        margin: [ 0, 0, 22, 0 ]
      },
      tableHeader: {
        bold: true,
        fontSize: 14
      },
      tableRow: {
        fontSize: 12
      },
      rowLeft: {
        alignment: 'left'
      },
      rowCenter: {
        alignment: 'center'
      },
      rowRight: {
        alignment: 'right'
      },
      generateDate: {
        fontSize: 8
      }
    }
  }

  var options = {
    // ...
  }

  try {
    pdfMake.createPdf(docDefinition, options).open()
  } catch (error) {
    console.log('erro generating PDF', error)
  }
}
  