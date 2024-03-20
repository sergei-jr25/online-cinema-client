import cn from 'clsx'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import styles from './form-element.module.scss'
import { ITextEditor } from './form.interface'

const TextEditor: FC<ITextEditor> = ({
	value,
	onChange,
	placeholder,
	error
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (isUpdated) return

		const defaultValue = value || ''
		const bloksFromHtml = htmlToDraft(defaultValue)

		const contentState = ContentState.createFromBlockArray(
			bloksFromHtml.contentBlocks,
			bloksFromHtml.entityMap
		)

		const newEditorState = EditorState.createWithContent(contentState)
		setEditorState(newEditorState)
	}, [isUpdated, value])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)

		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	return (
		<div className={cn(styles.common, styles.editorWrapper)}>
			<label>
				<span>{placeholder}</span>
				<div>
					<Editor
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={{
							options: ['inline', 'blockType', 'list'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: ['bold', 'italic', 'underline', 'strikethrough']
							},
							blockType: {
								inDropdown: false,
								options: []
							},
							list: {
								inDrodown: false,
								options: ['unordered', 'ordered']
							}
						}}
					/>
				</div>
			</label>

			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}
export default TextEditor
