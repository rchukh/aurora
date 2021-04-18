import './assets/css/style.scss'
import { graph } from './app/graph.js'
import $ from 'jquery'

const myModal = document.getElementById('exampleModal')
myModal.addEventListener('shown.bs.modal', function () {
  const currentLabel = this.getAttribute('data-ele-label')
  document.getElementById('element_name').value = currentLabel
})
$('#element-edit-save').on('click', function (e) {
  console.log(document.getElementById('element_name').value)
  graph
    .getElementById(document.getElementById('exampleModal').getAttribute('data-ele-id'))
    .data('label', document.getElementById('element_name').value)
})
