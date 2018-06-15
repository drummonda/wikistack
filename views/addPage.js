const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="author" class="col-sm-2 control-label">Author</label>
      <div class="col-sm-10">
        <input id="author" name="author" type="text" class="form-control" placeholder="Hermoine Granger"/>
      </div>
    </div>
    <br>
    <br>
    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control" placeholder="hgrange@hogwarts.wiz"/>
      </div>
    </div>
    <br>
    <br>
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control" placeholder="Spells for Levitation"/>
      </div>
    </div>
    <br>
    <br>
    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <textarea id="content" name="content" type="text-area" class="form-control" placeholder="Pronounciation is key..."/></textarea>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <select id="status" name="status" type="text" class="form-control"/>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>
    <br>
    <br>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
    <br>
    <br>
  </form>
`);
