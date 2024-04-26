from django import forms

class ResumeForm(forms.Form):
    file = forms.FileField()