<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
      <Button class="btn btn-primary" @tap="firebaseIt()">Firebase Button</Button>
    </StackLayout>

  </Page>
</template>

<script>
var firebase = require("nativescript-plugin-firebase");

export default {
    methods: {
      firebaseIt: function (event) {
        console.log('firebase button clicked');
        
        firebase.init({
          // Optionally pass in properties for database, authentication and cloud messaging,
          // see their respective docs.
        }).then(
            function (instance) {
              console.log("firebase.init done");
            },
            function (error) {
              console.log("firebase.init error: " + error);
            }
        );
      }
    }
  };
</script>