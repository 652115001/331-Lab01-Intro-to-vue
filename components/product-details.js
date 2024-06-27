const productDetails ={
template: `
<p>Details of this product: {{details}}</p>
`,
props:{
    details: String
},
setup(props){
    const show = (props.details)
    return{
        show
    }
}


}