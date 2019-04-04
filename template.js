/* global $ */

function Template() {

  this.variables = {
    'app-name': 'S3MT',
    'app-version': '2.0.0'
  }

  this.renderVariables = () => {
    Object.keys(this.variables).forEach(variable => {
      var variableValue = this.variables[variable]
      $("*[data-value='" + variable + "']").text(variableValue)
    })
  }

  let yeet = true
}
