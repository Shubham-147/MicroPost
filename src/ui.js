class UI {
  constructor() {
    this.posts = document.querySelector('.posts')
    this.titleInput = document.querySelector('#title')
    this.bodyInput = document.querySelector('#body')
    this.idInput = document.querySelector('#id')
    this.postSubmit  = document.querySelector('.post-submit')
    this.forState = 'add'
  }
  showPosts(posts){
    let output = '';
    posts.forEach(post=>{
      output +=`
        <div class= 'mb-3'>
          <div class ='card-body'>
            <h4 class='card-title'>${post.title}<h4>
            <p class='card-text'>${post.body}</p>
            <a href='#' class='edit card-link' data-id='${post.id}'>
              <i class ='fa fa-pencil'></i>
            </a>
            <a href='#' class='delete card-link' data-id='${post.id}'>
              <i class ='fa fa-remove'></i>
            </a>
          </div>
        </div>
      `
    })
    this.posts.innerHTML = output
  }

  showAlert(msg,cls) {
    this.clearAlert()
    const div = document.createElement('div')
    div.className = cls
    div.appendChild(document.createTextNode(msg))
    const container= document.querySelector('.postContainer')
    const post  = document.querySelector('.posts')
    container.insertBefore(div,post)
    setInterval(this.clearAlert,3000);
  }

  clearAlert(){
    const currentAlert =  document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove()
    }

  }

  clearFeild(){
    this.titleInput.value=''
    this.bodyInput.value='' 
  }
  clearIdInput(){
    this.idInput.value=''
  }

  fillForm(data) {
    this.titleInput.value=data.title
    this.bodyInput.value=data.body
    this.idInput.value= data.id
    this.changeFormState('edit')
  }

  changeFormState(type){
    if(type === 'edit') {
      this.postSubmit.textContent = 'Update Post'
      this.postSubmit.className = 'post-submit btn btn-warning btn-block'

      const button = document.createElement('button')
      button.className='post-cancel btn btn-light btn-block'
      button.appendChild(document.createTextNode('Cancel'))

      const cardForm= document.querySelector('.card-form')
      const formend = document.querySelector('.form-end')
      cardForm.insertBefore(button,formend)
    }
    else {
      this.postSubmit.textContent = 'Post It'
      this.postSubmit.className = 'post-submit btn btn-primary btn-block'
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove()
      }
      this.clearIdInput()
      this.clearFeild()

    }
  }
}

export const ui = new UI()