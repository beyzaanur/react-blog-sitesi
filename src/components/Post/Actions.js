import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog, deleteBlog, editBlog } from './blogSlice';
import 'components/Posts.css';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { Helmet } from 'react-helmet';

const BlogsList = () => {
  const blogs = useSelector(state => state.blogs);
  const dispatch = useDispatch();

  const [newBlog, setNewBlog] = useState({ title: '', image: '', body: '' });
  const [editMode, setEditMode] = useState(null);
  const [editBlogData, setEditBlogData] = useState({ title: '', image: '', body: '' });
  const [expandedBlogs, setExpandedBlogs] = useState({});

  const photoOptions = [
    'fotolar/another.jpg',
    'fotolar/aot.jpg',
    'fotolar/hutao.jpg',
    'fotolar/demon_slayer.jpg',
    'fotolar/ergo_proxy.jpg',
    'fotolar/hxh.pg',
    'fotolar/monster.png',
    'fotolar/naruto.jpg',
    'fotolar/tokyo_ghoul.jpg',
    'fotolar/bsd.jpg',
    'fotolar/death_note.jpg',
    'fotolar/death_parade.jpg',
    'fotolar/dr_stone.jpg',
    'fotolar/haikyuu.jpg',
    'fotolar/hellsing.jpg',
    'fotolar/howls_mov_castle.png',
    'fotolar/jjk.png',
    'fotolar/spyxfamily.jpg',
    'fotolar/totoro.jpg',
    'fotolar/hotarubi.jpg',
    'fotolar/tokyo_revengers.jpg',
  ];

  const handleAddBlog = () => {
    const newId = blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    dispatch(addBlog({ id: newId, ...newBlog }));
    setNewBlog({ title: '', image: '', body: '' });
  };

  const handleEditBlog = (id) => {
    dispatch(editBlog({ id, updatedBlog: editBlogData }));
    setEditMode(null);
    setEditBlogData({ title: '', image: '', body: '' });
  };

  const toggleExpandBlog = (id) => {
    setExpandedBlogs(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditBlogData({ title: '', image: '', body: '' });
  };

  return (
    <div>
      <h1 style={{ marginTop: '2rem' }}>POSTLARIM</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} className="blog-wrapperr">
            <div className="blog-image">
              <Container >
                <Helmet>
                  <title>Edit</title>
                </Helmet>
                <Card.Body>
                  <Card style={{ width: '300px', height: '400px' }}>
                    <Card.Img
                      variant="top"
                      src={blog.image || 'fotolar/default.jpg'}
                      alt={blog.title}
                      style={{ width: '300px', height: '400px', borderRadius: '5px', alignItems: 'left' }} />
                  </Card>
                </Card.Body>
              </Container>
            </div>
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <p>
                {expandedBlogs[blog.id] ? blog.body : blog.body.slice(0, 200) + '...'}
              </p>
              {blog.body.length > 100 && (
                <button onClick={() => toggleExpandBlog(blog.id)}>
                  {expandedBlogs[blog.id] ? 'Kapat' : 'Devamını Oku'}
                </button>
              )}
              <hr />

              <div className="blog-actions">
                <button onClick={() => dispatch(deleteBlog(blog.id))}>Sil</button>
                <hr />
                <button onClick={() => setEditMode(blog.id)}>Düzenle</button>
              </div>

              {editMode === blog.id && (
                <div className="edit-blog">
                  <CloseButton onClick={handleCancelEdit} style={{ marginLeft: '64rem' }} />
                  <input
                    type="text"
                    placeholder="Başlık"
                    value={editBlogData.title}
                    onChange={(e) => setEditBlogData({ ...editBlogData, title: e.target.value })}
                  />
                  <select
                    value={editBlogData.image}
                    onChange={(e) => setEditBlogData({ ...editBlogData, image: e.target.value })}
                  >
                    <option value="">Görsel Seç</option>
                    {photoOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="İçerik"
                    value={editBlogData.body}
                    onChange={(e) => setEditBlogData({ ...editBlogData, body: e.target.value })}
                  />
                  <button onClick={() => handleEditBlog(blog.id)}>Kaydet</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <h2 style={{ textAlign: 'center', marginBottom: '3rem', backgroundColor: 'gray', marginTop: '2rem' }}>Yeni Blog Ekle</h2>
      <div style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Başlık"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          style={{ height: '4rem', width: '21rem', marginRight: '2rem' }}
        />
        <select
          value={newBlog.image}
          onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
          style={{ height: '4rem', width: '21rem', marginLeft: '2rem' }}
        >
          <option value="">Görsel Seç</option>
          {photoOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <br />
        <textarea
          placeholder="İçerik"
          value={newBlog.body}
          onChange={(e) => setNewBlog({ ...newBlog, body: e.target.value })}
          style={{ width: '46rem', height: '10rem', marginTop: '3rem' }}
        />
        <button onClick={handleAddBlog}>Ekle</button>
      </div>
    </div>
  );
};

export default BlogsList;

