import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../conf/conf'

export default function RTE({ name, control, label, defaultValue = '' }) {
  return (
    <div className="w-full">

      {label && (
        <label className="inline-block mb-2 text-gray-700 font-medium">
          {label}
        </label>
      )}


      <Controller
        name={name || 'content'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm focus-within:shadow-md transition-shadow duration-300">
            <Editor
              apiKey={conf.tinyMceApiKey}
              value={value || defaultValue}
              init={{
                height: 400,
                menubar: true,
                plugins: [
                  'advlist autolink lists link image charmap preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table code help wordcount',
                ],
                toolbar:
                  'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color:#1f2937; }', // gray-800
                skin: 'oxide',
                content_css: 'default',
              }}
              onEditorChange={onChange}
            />
          </div>
        )}
      />
    </div>
  )
}