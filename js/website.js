$(document).ready(function(){
  $(".glossary-term").click(function(){
    // Could prevent duplicate requests by checking if a
    // modal is already available with the term.

    $.ajax({
      type: 'GET',
      url: 'glossary.json',
      data: $(this).data('glossary-term'),
      async: true,
      dataType: 'json',
      success: function (data) {
        displayGlossaryModal(data);
      }
    });
  });
});

function displayGlossaryModal(data) {
  var modal_term = document.createElement('h3');
  modal_term.innerHTML = data['term'];
  var modal_definition = document.createElement('p');
  modal_definition.innerHTML = data['definition'];
  var modal_content = document.createElement('div');
  modal_content.className ='modal-content';
  modal_content.appendChild(modal_term);
  modal_content.appendChild(modal_definition);
  var modal = document.createElement('div');
  modal.className ='modal';
  modal.appendChild(modal_content);
  document.body.appendChild(modal);
  $(modal).openModal();
};
