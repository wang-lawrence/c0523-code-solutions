import { useState } from 'react';

export default function UploadForm() {
  const [url, setUrl] = useState('/images/GitHub logo-1689978809265.png');
  async function handleSubmit(event) {
    /* Prevent the browser's default behavior for form submissions.
     * Create a `new` FormData object from the `event`.
     *
     * Use fetch() to send a POST request to '/api/uploads'.
     * The body should be the form data object you created (not a JSON string).
     * Headers are not necessary as fetch will use the correct Content-Type
     * automatically (multipart/form-data).
     *
     * Parse the JSON response body and log the parsed response body.
     * Log any errors to the console (using `console.error`).
     *
     * References:
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
     */
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const req = {
        method: 'POST',
        body: formData,
      };
      const res = await fetch('/api/uploads', req);
      if (!res.ok) console.error('Failed to upload image');
      const result = await res.json(res);
      console.log(result);
      setUrl(result.url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
          <img src={url} alt=""></img>
        </div>
      </div>
    </div>
  );
}
