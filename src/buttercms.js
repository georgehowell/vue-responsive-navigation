import Butter from 'buttercms'

export const butter = Butter('826516fb0e96782192e6864823b9bac9e88cb9ed')

butter.post.retrieve('example-post')
.then(function (resp) {
    console.log(resp.data)
})
.catch(function (resp) {
    console.log(resp)
})
