# PennApps2018w

<h1> Users </h1>
<h3> /register </h3>
<p> Paratmeters: name: String, email: String (unique), password: String </p>
<p> Registers new users</p>

<h3> /authenticate </h3>
<p> Paratmeters: email: String (unique), password: String </p>
<p> Checks if credentials are correct, returns a success json</p>

<h3> /profile </h3>
<p> Paratmeters: email: String </p>
<p> Returns user object as json</p>


<h1> Groups </h1>

<h3> /create </h3>
<p> Paratmeters: owner_user: String, group_name: String, list_of_invitees: [String] </p>
<p> Creates a new Group and adds the owner user to it</p>

<h3> /addMembers </h3>
<p> Paratmeters: list_of_invitees: [String], group_id: String </p>
<p> Adds users to list of invitees and sends email to them to join the group </p>


