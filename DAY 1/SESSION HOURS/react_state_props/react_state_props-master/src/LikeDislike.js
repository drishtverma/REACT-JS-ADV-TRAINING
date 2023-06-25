import React, { Component } from 'react'

class LikeDislike extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           likes:0,
           message:""
        }
      }
  
      increment(){
         if(this.state.likes<10){
            this.setState({
                likes : this.state.likes + 1,
                message:""
            })
         }
         else{
            this.setState({
                message:"Likes can't exceed 10"
            })
         }
      }

      decrement(){
        if(this.state.likes>0){
            this.setState({
                likes : this.state.likes - 1,
                message:""
            })
         }
         else{
            this.setState({
                message:"Likes can't be below 0"
            })
         }
      }

  render() {  
    return (
      <div>
          <div>{this.state.message}</div>
          <div>Likes: {this.state.likes} </div>
          <button onClick={()=> this.increment()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.396 20.708c-.81-.062-.733-.812.031-.953 1.269-.234 1.827-.914 1.827-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.132-.09 1.688-.764 1.688-1.41 0-.565-.425-1.108-1.261-1.22-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.667-.198-4.979-.885.907-3.657.689-8.782-1.687-8.782-1.594 0-1.896 1.807-2.375 3.469-1.718 5.969-5.156 7.062-8.687 7.603v9.928c6.688 0 8.5 3 13.505 3 3.199 0 4.852-1.735 4.852-2.666-.001-.334-.273-.572-.961-.626z"/></svg></button>
          <button onClick={()=> this.decrement()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.396 3.292c-.811.062-.734.812.031.953 1.268.234 1.826.914 1.826 1.543 0 .529-.396 1.022-1.098 1.181-.837.189-.664.757.031.812 1.133.09 1.688.764 1.688 1.41 0 .565-.424 1.108-1.26 1.22-.857.115-.578.734.031.922.521.16 1.354.5 1.354 1.51 0 .672-.5 1.562-2.271 1.49-1.228-.05-3.666.198-4.979.885.907 3.657.689 8.782-1.687 8.782-1.594 0-1.896-1.807-2.375-3.469-1.718-5.969-5.156-7.062-8.687-7.603v-9.928c6.688 0 8.5-3 13.505-3 3.198 0 4.852 1.735 4.852 2.666-.001.334-.273.572-.961.626z"/></svg></button>
      </div>
    )
  }
}

export default LikeDislike