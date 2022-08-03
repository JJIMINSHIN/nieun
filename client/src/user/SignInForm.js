import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useCookies} from 'react-cookie'


const SingInForm = ({}) => {

 


  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">이메일</label>
            <input type="email"  className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">비밀번호</label>
            <input type="password"className="form-control" id="password" name="password" />
          </div>
          <div className='mb-3'>
            {/* <p className='text-danger'>
              {errorMessage}
            </p> */}
          </div>

          <button type="button"className="btn btn-primary">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default SingInForm;