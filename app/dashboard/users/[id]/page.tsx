import React from 'react'

// const Page = async ({params}: {params: Promise<{id: string}>}) => {
//     const {id} = await params;
  
//     return (
//     <div>User details {id}</div>
//   )
// }

const Page = async (props: any) => {
    await console.log(props.params.promise);
  
    return (
    <div>User details</div>
  )
}

export default Page