"use strict";



var getJson = [
                {
                  'name' : 'Step 1',
                  'elements' : [
                                  {
                                    'tag':'input',
                                    'attributes': [
                                                    { 
                                                      'attr' : 'placeholder',
                                                      'value' : 'Your name...'
                                                    },
                                                    {
                                                      'attr' : 'type',
                                                      'value' : 'text'
                                                    }
                                                  ]
                                  },
                                  {
                                    'tag':'input',
                                    'attributes': [
                                                    { 
                                                      'attr' : 'placeholder',
                                                      'value' : 'Your email address...'
                                                    },
                                                    {
                                                      'attr' : 'type',
                                                      'value' : 'email'
                                                    }
                                                  ]
                                  },
                                  {
                                    'tag':'input',
                                    'attributes': [
                                                    { 
                                                      'attr' : 'placeholder',
                                                      'value' : 'Password...'
                                                    },
                                                    {
                                                      'attr' : 'type',
                                                      'value' : 'password'
                                                    }
                                                  ]
                                  },
                                  {
                                    'tag':'input',
                                    'attributes': [
                                                    { 
                                                      'attr' : 'placeholder',
                                                      'value' : 'Repeat password...'
                                                    },
                                                    {
                                                      'attr' : 'type',
                                                      'value' : 'password'
                                                    }
                                                  ]
                                  },
                                  {
                                    'tag':'input',
                                    'attributes': [
                                                    {
                                                      'attr' : 'type',
                                                      'value' : 'checkbox'
                                                    }
                                                  ],
                                    'label': 'I accept terms and conditions.'
                                  },
                                  {
                                    'tag':'button',
                                    'attributes': [
                                                    { 
                                                      'attr' : 'Value',
                                                      'value' : 'Next'
                                                    }
                                                  ],
                                    'innerHtml': 'Next'
                                  },
                                ],
                  'state' : 'active'
                }
              ];

function createDom(obj) {
  for (var i = 0; i < obj.length; i++) {
    createStep(obj[i].name, obj[i].state, obj[i].elements);
  }
}

function createStep(name, state, form) {
  var wrapper = document.createElement('div'),
      stepTitle = document.createElement('h3');

  stepTitle.innerHTML = name;
  wrapper.className = 'form-step ' + state;
  wrapper.appendChild(stepTitle);
  document.body.appendChild(wrapper);

  createForm(form, wrapper);
}

function createForm(arr, wrapper) {
  var element;
  for (var i = 0; i < arr.length; i++) {
    element = document.createElement(arr[i].tag);
    element.innerHTML = arr[i].innerHtml;
    parseAttr(arr[i].attributes, element);
    wrapper.appendChild(element);
  }
}

function parseAttr(arr, el) {
  for (var i = 0; i < arr.length; i++) {
    el.setAttribute(arr[i].attr, arr[i].value);
  }
}

createDom(getJson);










































