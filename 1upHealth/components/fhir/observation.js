import React from 'react'

export default class FhirObservation extends React.Component {
    render () {
        return (
          <div className='tile'>
            <h2 className='primarycolor' style={{display: 'inline-block'}}>
              {this.props.resource.code && this.props.resource.code.coding ? <span>{this.props.resource.code.coding[0].display} {this.props.resource.code.coding[0].code}</span> : this.props.resource.code.text}
            </h2>
            &nbsp;&nbsp;&nbsp;
            {/* <h3 style={{display: 'inline-block'}}>{this.props.resource.verificationStatus} & {this.props.resource.clinicalStatus}</h3> */}
            <table>
              <tbody>
                {this.props.resource.referenceRange ? (
                  <tr>
                    <td><strong>Reference Range</strong></td>
                    <td>{this.props.resource.referenceRange[0].text}</td>
                  </tr>
                ) : ''}
                 {this.props.resource.valueQuantity ? (
                  <tr>
                    <td><strong>Patient Quantity </strong></td>
                    <td>{this.props.resource.valueQuantity.value} {this.props.resource.valueQuantity.unit}</td>
                  </tr>
                ) : ''}
                {typeof this.props.resource.performer !== 'undefined' ? (
                  <tr>
                    <td><strong>Diagnosed by</strong></td>
                    <td>{this.props.resource.performer[0].display}</td>
                  </tr>
                ) : ''}
              </tbody>
            </table>
          </div>
        )
      }
}