user_data = (JSON.parse(localStorage.getItem('user')))

if (user_data.group.length === 0) {
  console.log('none')
  $('#groups-menu').append("<li class='disabled'>No groups</li>")

} else {
  console.log('there are')
  for (var group of user_data.group) {
    console.log(group)
  }
}
