const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 3, name: 'quq', price: 13 }
  ];

  const nameinput = prompt('foo')

  const found = items.find(item => item.name === nameinput)

  if(found){
    console.log('we found it')
    console.log found
  }