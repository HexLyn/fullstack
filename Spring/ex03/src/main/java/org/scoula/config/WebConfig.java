package org.scoula.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.Filter;  // 이 부분이 중요합니다.
import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletRegistration;

@Slf4j
@Configuration
public class WebConfig extends AbstractAnnotationConfigDispatcherServletInitializer {
    final String LOCATION = "c:/upload";
    final long MAX_FILE_SIZE = 10L * 1024 * 1024;
    final long MAX_REQUEST_SIZE = 20L * 1024 * 1024;
    final int FILE_SIZE_THRESHOLD = 5 * 1024 * 1024;
    //5메가 할당,

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[] { RootConfig.class };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] { ServletConfig.class };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }

    // UTF-8 인코딩을 강제로 사용하게 하는 필터.
    @Override
    protected Filter[] getServletFilters() {  // javax.servlet.Filter로 수정
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
        characterEncodingFilter.setEncoding("UTF-8");
        characterEncodingFilter.setForceEncoding(true);

        return new Filter[] { characterEncodingFilter };
    }

    @Override
    protected void customizeRegistration(ServletRegistration.Dynamic registration) {
        registration.setInitParameter("throwExceptionIfNoHandlerFound", "true");

        MultipartConfigElement multipartConfig = new MultipartConfigElement(
                LOCATION, //업로드된 파일이 저장될 디렉터리.
                MAX_FILE_SIZE, // 업로드 가능한 파일 하나의 최대 크기
                MAX_REQUEST_SIZE, // 업로드 가능한 전체 파일의 최대 크기
                FILE_SIZE_THRESHOLD // 메모리 제한, 이보다 더 작은 파일은 메모리에서만 처리.
        );
        registration.setMultipartConfig(multipartConfig); //설정한 multipartconfigelement 등록.
    }
}
