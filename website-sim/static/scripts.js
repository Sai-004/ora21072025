// scripts.js
function AppViewModel() {
    this.greeting = ko.observable("Hello, Knockout!");
}

// Activate Knockout bindings
window.addEventListener('DOMContentLoaded', () => {
    ko.applyBindings(new AppViewModel());
});
