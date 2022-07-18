class Github {
   constructor() {
     this.client_id = '17e6a97dfd0b138bc0e7';
     this.client_secret = '09f90406d3e3374fd1a7e2dc53e6a6c3e628aa73';
     this.repos_count = 5;
     this.repos_sort = 'created: asc';
   }
 
   async getUser(user) {
     const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
 
     const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
 
     const profile = await profileResponse.json();
     const repos = await repoResponse.json();
 
     return {
       profile,
       repos
     }
   }
 }