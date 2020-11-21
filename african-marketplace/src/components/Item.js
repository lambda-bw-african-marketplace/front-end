export const Item=()=>{
    return(
        <div>
            <form>
                <input type='text' name='product_name' placeholder='product name'/>
                <input type='text' name='location' placeholder='location'/>
                <input type='text' name='description' placeholder='description'/>
                <input type='text' name='price' placeholder='price'/>
                {/* <input type='text' name='' placeholder=''/> */}
            </form>
        </div>
    )
}