import { useState } from 'react'
import './App.css'

const App = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [post, setPost] = useState([])

  const [editIndex, setEditIndex] = useState(null)


  function handleSubmit(e) {

    e.preventDefault()

    const copyPost = [...post]

    if (editIndex === null) {

      //add new post
      copyPost.push({
        title,
        desc
      })

    } else {

      // Update existing post
      copyPost[editIndex] = {
        title,
        desc
      }

      setEditIndex(null)
    }

    setPost(copyPost)

    setTitle("")
    setDesc("")
  }


  function deletePost(index) {

    const copyPost = [...post]

    copyPost.splice(index, 1)

    setPost(copyPost)
  }


  function editPost(index) {

    setTitle(post[index].title)

    setDesc(post[index].desc)

    setEditIndex(index)
  }


  return (

    <div className="min-h-screen bg-[url('/gliter.avif')] bg-contain bg-center">

      <div className="flex flex-col lg:flex-row gap-8 w-[95%] mx-auto">

        <div className="w-[95%] min-h-[80vh] mt-10 mx-auto flex flex-col lg:flex-row gap-6 custom-outline">


          {/* left div */}

          <div className="w-full lg:w-[40%]">

            <div className="bg-blue-300/20 backdrop-blur-md rounded-2xl p-6 shadow-lg min-h-[70vh] mt-13 ml-3">

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >

                <input
                  className="border-3 border-sky-200 rounded-2xl px-4 py-3 mb-4 pl-4 focus:outline-none text-white"
                  type="text"
                  placeholder="Note Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />


                <h3 className="text-white text-xl">
                  Note content:
                </h3>


                <input
                  className="border-3 border-pink-200 rounded-2xl px-4 py-14 mb-4 pl-4 focus:outline-none text-white"
                  type="text"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value)
                  }}
                />


                <button
                  className="px-2 py-3 bg-linear-to-bl from-[#a3c5d6] to-[#ec94cd] rounded-xl max-w-28 text-white"
                >
                  {editIndex === null ? "Post" : "Update"}
                </button>

              </form>

            </div>

          </div>


          {/* right div */}

          <div className="w-full lg:w-[60%]">

            <h2 className="italic text-2xl font-bold text-[#491e14] mb-6 text-shadow-lg/27">
              Notes:
            </h2>


            {post.length === 0 ? (

              <p className="text-[#3f1107] text-4xl font-bold italic text-shadow-lg/20">
                No posts yet. Be the first to share something!
              </p>

            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {post.map((elem, ids) => {

                  return (

                    <div
                      key={ids}
                      className="bg-white/30 backdrop-blur-md rounded-xl p-4 min-h-[160px] shadow-md"
                    >

                      <h2 className="text-[#57281e] text-lg font-bold mb-2">
                        {elem.title}
                      </h2>


                      <p className="text-[#57281e] text-sm mb-4">
                        {elem.desc}
                      </p>


                      <div className="flex gap-2">

                        <button
                          onClick={() => editPost(ids)}
                          className="px-3 py-1 bg-blue-400 rounded-lg text-white text-sm"
                        >
                          Edit
                        </button>


                        <button
                          onClick={() => deletePost(ids)}
                          className="px-3 py-1 bg-pink-400 rounded-lg text-white text-sm"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  )

                })}

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  )
}

export default App